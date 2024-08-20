export type RefreshTokenApiBody = { refreshToken: string; id: string };

export type CreateTodoApiBody = { title: string; description: string };

export type SwitchTodoStatusApiBody = { status: string; id: number };

export type EditTodoApiBody = CreateTodoApiBody & { id: string };
