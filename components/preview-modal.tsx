"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import Modal from "@/components/ui/modal";
import GalleryTab from "./gallery/gallery-tab";

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const event = usePreviewModal((state) => state.data);

  const images = [];
  images.push(event?.image);

  if (!event) {
    return null;
  }

  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
      <div className="grid w-full grid-cols-1 items=start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8"></div>
      <div className="sm:col-span-4 lg:col-span-5">
        <GalleryTab data={images} />
      </div>
    </Modal>
  );
};

export default PreviewModal;
