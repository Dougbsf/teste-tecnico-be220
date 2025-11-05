export interface ISlide {
    slideLabel: string;
    slideImgPath: string;
    action: () => void;
    lastTrained?: boolean;
    overlayLabel?: boolean;
    overlayIcon?: 'add-outline' | 'body' | 'trophy';
}

