import { Injectable } from "@nestjs/common"

@Injectable()
export class RestService {
  constructor(private fetchService: FetchService) {}

  public async findPeople() {
    return this.fetchService.post('!')
  }
}