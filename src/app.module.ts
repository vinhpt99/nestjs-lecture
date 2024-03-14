import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [DatabaseModule,UsersModule, EmployeesModule], //DatabaseModule
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
