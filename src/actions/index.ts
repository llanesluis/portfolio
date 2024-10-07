import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  message: defineAction({
    accept: "form",
    input: z.object({
      "entry.1045781291": z.string().email(),
      "entry.839337160": z.string().min(1),
    }),
    handler: async (input) => {
      const { "entry.1045781291": email, "entry.839337160": message } = input;
      const emailField = "entry.1045781291";
      const messageField = "entry.839337160";

      await fetch(
        `https://docs.google.com/forms/d/e/1FAIpQLSeXlajMfWOuay_0I-ZzCTBoldTggo1Xz3c_fi5eVLAXN7SS_A/formResponse?submit=Submit&usp=pp_url&${emailField}=${email}&${messageField}=${message}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      );

      return { success: true, message: "Thanks for your message!" };
    },
  }),
};
