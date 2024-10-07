import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDispatch } from "react-redux";
import { addTodo } from "@/store/Todo/TodoSlice";
import { toast } from "@/hooks/use-toast";

const intialData = {
  title: "",
  description: "",
  time: "",
};

const Header = () => {
  const [formData, setFormData] = React.useState(intialData);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    dispatch(addTodo(formData)).then((data) => {
      if (data.success === false) {
        toast({
          title: "Error",
          description: data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: data.message ? data.message : "Success",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    });

    setFormData(intialData);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Add Todo</DialogTitle>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Title
                </Label>
                <Input
                  name="title"
                  id="title"
                  value={formData.title}
                  className="col-span-3"
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      [event.target.name]: event.target.value,
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Textarea
                  name="description"
                  id="description"
                  className="col-span-3"
                  value={formData.description}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      [event.target.name]: event.target.value,
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="time" className="text-right">
                  Time
                </Label>
                <Input
                  type="time"
                  name="time"
                  id="time"
                  className="col-span-3"
                  value={formData.time}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      [event.target.name]: event.target.value,
                    })
                  }
                />
              </div>
            </div>
            <Button type="submit">Save</Button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Header;
