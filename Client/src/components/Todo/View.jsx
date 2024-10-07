import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

export const View = ({ title, description, time }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Todo</DialogTitle>
        </DialogHeader>
        <div>
          {/* display todo */}
          <div>
            <h2 className="text-semibold">Title:{title} </h2>
            <p>Description: {description}</p>
            <p>Time: {time}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
