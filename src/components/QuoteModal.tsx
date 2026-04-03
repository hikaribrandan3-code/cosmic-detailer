import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const services = [
  "Spring Reset Special $249",
  "Interior Detailing",
  "Wax Package",
  "Mini Detail",
  "Full Detail",
  "Exterior Detail",
  "Water Spot Treatment",
  "One-Step Polish",
  "Two-Step Paint Correction",
  "Ceramic Coating",
  "PPF — Paint Protection Film",
  "Window Tint",
];

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultService?: string;
  defaultLocation?: string;
}

const QuoteModal = ({ open, onOpenChange, defaultService, defaultLocation }: QuoteModalProps) => {
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState(defaultService || "");
  const [location, setLocation] = useState(defaultLocation || "");

  useEffect(() => {
    if (open) {
      if (defaultService) setService(defaultService);
      if (defaultLocation) setLocation(defaultLocation);
    } else {
      setService("");
      setLocation("");
    }
  }, [open, defaultService, defaultLocation]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onOpenChange(false);
      toast.success("Quote request sent! We'll be in touch within 24 hours.");
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg border-border bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl text-glow">Launch My Quote</DialogTitle>
          <p className="text-muted-foreground text-sm">Fill in your details and we'll get back to you within 24 hours.</p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input placeholder="First Name" required className="bg-secondary border-border" />
            <Input placeholder="Phone" type="tel" required className="bg-secondary border-border" />
          </div>
          <Input 
            placeholder="Email" 
            type="email" 
            required 
            className="bg-secondary border-border" 
          />
          <Input 
            placeholder="Location / City" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
            required 
            className="bg-secondary border-primary/20 text-[#39FF14]" 
          />
          <div className="grid grid-cols-3 gap-3">
            <Input placeholder="Year" className="bg-secondary border-border" />
            <Input placeholder="Make" className="bg-secondary border-border" />
            <Input placeholder="Model" className="bg-secondary border-border" />
          </div>
          <Select>
            <SelectTrigger className="bg-secondary border-border">
              <SelectValue placeholder="Vehicle Condition (1-10)" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 10 }, (_, i) => (
                <SelectItem key={i + 1} value={String(i + 1)}>{i + 1} — {i < 3 ? "Needs Heavy Work" : i < 6 ? "Fair Condition" : i < 9 ? "Good Shape" : "Showroom"}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger className="bg-secondary border-border">
              <SelectValue placeholder="Service Interested In" />
            </SelectTrigger>
            <SelectContent>
              {services.map(s => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Textarea placeholder="Additional notes..." className="bg-secondary border-border" rows={3} />
          <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground font-display uppercase tracking-wider hover:opacity-90">
            {loading ? "Launching..." : "Launch My Quote →"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;
