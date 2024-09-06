import React from 'react'
import { OverlayProps } from '@/types/menu'

const Overlay: React.FC<OverlayProps> = ({ onClick }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 z-40"
    style={{ left: 0, width: '100%' }}
    onClick={onClick}
  ></div>
);

export default Overlay;
