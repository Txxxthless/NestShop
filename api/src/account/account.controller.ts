import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AccountService } from './account.service';
import { AuthGuard } from './guards/auth.guard';
import { UserDto } from './models/userDto.model';

@Controller('account')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Post('register')
  register(@Body() user: UserDto) {
    return this.accountService.register(user);
  }

  @Post('login')
  login(@Body() user: UserDto) {
    return this.accountService.login(user);
  }

  @UseGuards(AuthGuard)
  @Get('secret')
  getSecret() {
    return 'Secret!';
  }
}
