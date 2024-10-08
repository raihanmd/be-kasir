import { PaginationSchema } from "src/common/zod";
import { z } from "zod";

export class BrandValidation {
  static CREATE = z.object({
    supplier_id: z.string().min(1),
    name: z.string().min(1),
  });

  static UPDATE = z.object({
    supplier_id: z.string().min(1).optional(),
    name: z.string().min(1).optional(),
    id: z.string().min(1),
  });

  static QUERY = PaginationSchema.extend({
    name: z.string().min(1).optional(),
    supplier_id: z.string().min(1).optional(),
  });
}
