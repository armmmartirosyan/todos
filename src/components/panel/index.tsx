import {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  useCallback,
  useState,
} from "react";
import { TodoPanelProps } from "../../types/component-types";
import { Button, Input, Textarea } from "../index";
import { ButtonVariants } from "../../types";
import { useDisabled } from "./use-disabled";
import "./index.css";

export function Panel({ onClose, useAction, oldTodoInfo }: TodoPanelProps) {
  const [title, setTitle] = useState(oldTodoInfo?.title || "");
  const [description, setDescription] = useState(
    oldTodoInfo?.description || ""
  );

  const disabled = useDisabled(title, description);

  const { mutate, isLoading } = useAction();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (disabled) return;

    const requestBody = {
      id: oldTodoInfo?.id || undefined,
      description,
      title,
    };

    mutate(requestBody, {
      onSuccess() {
        onClose();
      },
    });
  };

  const handleClose = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onClose();
    },
    [onClose]
  );

  return (
    <form className="panel" onSubmit={handleSubmit}>
      <Input
        placeholder="Title"
        className="panel_input"
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
      <div className="panel_actions">
        <Button variant={ButtonVariants.SECONDARY} onClick={handleClose}>
          Cancel
        </Button>
        <Button disabled={disabled}>Done</Button>
      </div>
    </form>
  );
}
