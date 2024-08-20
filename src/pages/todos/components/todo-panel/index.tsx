import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Input, Textarea } from "../../../../components";
import { ButtonVariants } from "../../../../types";
import { useCreateTodo } from "../../../../hooks/request-hooks";

export function TodoPanel() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { mutate: createTodo, isLoading } = useCreateTodo();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    createTodo({ title, description });
  };

  return (
    <form className="todo_panel" onSubmit={handleSubmit}>
      <Input
        placeholder="Title"
        className="todo_input"
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />
      <Textarea
        placeholder="Description"
        name="description"
        value={description}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setDescription(e.target.value)
        }
      />
      <div className="todo_panel_actions">
        <Button variant={ButtonVariants.SECONDARY}>Cancel</Button>
        <Button>Done</Button>
      </div>
    </form>
  );
}
