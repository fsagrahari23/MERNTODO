import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { Button } from "../ui/button";
import Header from "./Header";
import Edit from "./Edit";
import { View } from "./View";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, fetchTodo } from "@/store/Todo/TodoSlice";
import { toast } from "@/hooks/use-toast";

export function ListTodo() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteTodo(id)).then((data) => {
      if (data.payload.success === false) {
        toast({
          title: data.message ? data.message : "Error",
          description: data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
      toast({
        title: data.payload.message ? data.payload.message : "Success",
        status: "success",
        duration: 3000,
      });
    });
  };
  const { todos } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodo()).then((data) => {
      if (data.success === false) {
        toast({
          title: data.message ? data.message : "Error",
          description: data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
      setData(data.payload.todos);
    });
  }, [dispatch, todos, data]);

  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">S.No</TableHead>
          <TableHead>Title</TableHead>

          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos &&
          todos.map((invoice, index) => (
            <TableRow key={invoice._id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{invoice.title}</TableCell>
              <TableCell className="text-right flex justify-end items-center gap-2">
                <Edit
                  id={invoice._id}
                  title={invoice.title}
                  description={invoice.description}
                  time={invoice.time}
                />
                <View
                  title={invoice.title}
                  description={invoice.description}
                  time={invoice.time}
                />
                <Button onClick={() => handleDelete(invoice._id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
