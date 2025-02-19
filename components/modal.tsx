import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Modal = () => {
  return (
    <Dialog>
      <DialogTrigger>Curriculum vitae</DialogTrigger>
      <DialogContent className="min-w-[35%]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
