import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import { z } from "zod";

// import { users } from "~/server/db/schema";


export const userRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  // create: protectedProcedure
  //   .input(z.object({ name: z.string().min(1), email: z.string().min(1) }))
  //   .mutation(async ({ ctx, input }) => {
  //     // simulate a slow db call
  //     await new Promise((resolve) => setTimeout(resolve, 1000));

  //     await ctx.db.insert(users).values({
  //       name: input.name,
  //       email: input.email,
  //     });
  //   }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    const users = await ctx.db.query.users.findMany(); // Adjust this line to match your actual query
    return users; // The uuid field will now be a string UUID, not a binary UUID
  }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.users.findFirst();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
