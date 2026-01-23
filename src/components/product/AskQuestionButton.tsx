import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

interface AskQuestionButtonProps {
  productName: string;
  className?: string;
  variant?: "default" | "outline";
}

const AskQuestionButton = ({ productName, className, variant = "outline" }: AskQuestionButtonProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Ваш вопрос отправлен! Мы свяжемся с вами в ближайшее время.");
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} className={`h-12 rounded-full ${className}`}>
          <MessageCircle className="w-4 h-4 mr-2" />
          Задать вопрос
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-light">Задать вопрос</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Вопрос о товаре: {productName}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Input
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="h-12 rounded-full px-5"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="tel"
              placeholder="Телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="h-12 rounded-full px-5"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-full px-5"
            />
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="Ваш вопрос"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="min-h-[120px] rounded-2xl px-5 py-4 resize-none"
            />
          </div>
          <Button type="submit" className="w-full h-12 rounded-full">
            Отправить
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AskQuestionButton;
