import React from 'react';
import './index.scss';
import { ModalProps } from './types';
import { CloseIcon } from '../../icons/Icons';

export default function Modal({
  isOpen,
  onClose,
  title,
  titleColor,
  backgroundColor,
  children
}: ModalProps){
  if (!isOpen) return null;

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div 
      className="modal-overlay"
      onClick={handleClose}
    >
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor: backgroundColor || 'var(--color-grayscale-background)' }}
      >
        <div className="modal-header">
          {title && (
            <h2 
              className="modal-title" 
              style={{color: titleColor || 'var(--color-grayscale-dark)'}}
            >
              {title.toUpperCase()}
            </h2>
          )}
          
          <button 
            className="modal-close" 
            onClick={handleClose}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};
