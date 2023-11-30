import { Injectable } from '@nestjs/common';
import { ProcurementService } from './procurement.service';

@Injectable()
export class ProcurementRepository {
  constructor(private readonly procService: ProcurementService) {}

  async placeOrder() {}

  async paySupplier() {}

  async getFeaturedShops() {}

  async requestShipping() {}

  async requestCourierService() {}
}
