import { renderHook } from "@testing-library/react-hooks";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { useAPI } from "./useAPI";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "Zayan" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should increment", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useAPI());

  await waitForNextUpdate();

  expect(result.current).toEqual({ name: "Zayan" });
});
