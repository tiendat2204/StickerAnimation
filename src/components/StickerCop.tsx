'use client'
import React, { useEffect, useState, useMemo, useCallback } from 'react'
import Image from 'next/image'

interface StickerProps {
  id: string;
  frameCount: number;
  frameRate: number;
  framesPerCol: number;
  framesPerRow: number;
  spriteImg: string;
  className?: string;
  frameSize?: number;
  onStickerClick?: (id: string) => void; // Thêm prop mới
}

const StickerCop: React.FC<StickerProps> = ({
  id,
  frameCount,
  frameRate,
  framesPerCol,
  framesPerRow,
  spriteImg,
  className = '',
  frameSize = 64,
  onStickerClick, // Thay thế onFrameChange
}) => {
  const [currentFrame, setCurrentFrame] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Tính toán các giá trị phụ thuộc
  const framePosition = useMemo(() => {
    const currentCol = currentFrame % framesPerRow
    const currentRow = Math.floor(currentFrame / framesPerRow)
    return { col: currentCol, row: currentRow }
  }, [currentFrame, framesPerRow])

  // Xử lý hover để bắt đầu/dừng animation
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    setCurrentFrame(0) // Reset về frame đầu tiên khi không hover
  }, [])

  // Xử lý click
  const handleClick = useCallback(() => {
    if (onStickerClick) {
      onStickerClick(id) // Gọi callback với id của sticker
    } else {
      console.log(`Sticker clicked: ${id}`) // Log mặc định nếu không có callback
    }
  }, [id, onStickerClick])

  // Tính toán các kích thước và biến đổi
  const containerStyle = useMemo(
    () => ({
      width: `${frameSize}px`,
      height: `${frameSize}px`,
    }),
    [frameSize]
  )

  const spriteStyle = useMemo(
    () => ({
      width: `${framesPerRow * frameSize}px`,
      height: `${framesPerCol * frameSize}px`,
      transform: `translate(-${framePosition.col * frameSize}px, -${framePosition.row * frameSize}px)`,
      transition: 'transform 0s',
    }),
    [framePosition, framesPerRow, framesPerCol, frameSize]
  )

  // Chỉ cập nhật frame khi đang hover
  useEffect(() => {
    if (!isHovered) return

    const frameInterval = setInterval(() => {
      setCurrentFrame((prevFrame) => {
        const nextFrame = (prevFrame + 1) % frameCount
        return nextFrame
      })
    }, 1000 / frameRate)

    return () => clearInterval(frameInterval)
  }, [frameCount, frameRate, isHovered])

  return (
    <div className='hover:bg-gray-100/90 dark:hover:bg-sidebar px-1 cursor-pointer rounded-lg'>
      <div
        className='relative overflow-hidden'
        style={containerStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        data-testid={`sticker-${id}`}
      >
        <div className={`absolute ${className}`} style={spriteStyle}>
          <Image
            id={id}
            src={spriteImg}
            alt={`Sprite Animation ${id}`}
            width={framesPerRow * frameSize}
            height={framesPerCol * frameSize}
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  )
}

export default StickerCop
