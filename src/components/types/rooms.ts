export interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  size: number;
  capacity: number;
  image: string;
  gallery: string[];
  amenities: string[];
  cancellation: string;
  category: string;
}

export interface RoomDetailsModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
}