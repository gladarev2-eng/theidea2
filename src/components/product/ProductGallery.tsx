import { motion } from "framer-motion";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

const ProductGallery = ({ images, name }: ProductGalleryProps) => {
  return (
    <div className="space-y-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative aspect-[4/3] overflow-hidden bg-muted"
        >
          <img
            src={image}
            alt={`${name} - изображение ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGallery;
