import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../guards/auth.guard';
import { UserDto } from '../models/userDto.model';

@Controller('account')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() user: UserDto) {
    return this.authService.register(user);
  }

  @Post('login')
  login(@Body() user: UserDto) {
    return this.authService.login(user);
  }

  @UseGuards(AuthGuard)
  @Get('secret')
  getSecret() {
    return 'Secret!';
  }
}
