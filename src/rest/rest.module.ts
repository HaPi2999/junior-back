import { Module } from "@nestjs/common"
import { RestService } from "./rest.service"

@Module({
  providers: [RestService],
  imports: [],
  exports: [RestService]
})
export class RestModule {}
