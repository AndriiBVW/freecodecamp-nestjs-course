import { Controller, Get, Patch, UseGuards } from "@nestjs/common";
import { User } from "generated/prisma/client";
import { GetUser } from "src/auth/decorator";
import { JwtGuard } from "src/auth/guard";

@UseGuards(JwtGuard)
@Controller("users")
export class UserController {
  @Get("me")
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  editUser() {}
}
