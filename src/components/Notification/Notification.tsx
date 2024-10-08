import React, { useEffect } from 'react';
import '../../App.css';

interface NotificationProps {
  message: string;
  type: 'success' | 'error' | 'loading';
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`tx-notification ${type}`}>
      {message}
    </div>
  );
};

export default Notification;
