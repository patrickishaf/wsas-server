import { Controller, Post } from '@nestjs/common';
import { ProcurementRepository } from './procurement.repository';

@Controller('procurement')
export class ProcurementController {
  constructor(private readonly procRepo: ProcurementRepository) {}

  @Post('place-order')
  async placeOrder() {
    return await this.procRepo.placeOrder();
  }

  @Post('pay-supplier')
  async paySupplier() {
    return await this.procRepo.paySupplier();
  }

  @Post('get-featured-shops')
  async getFeaturedShops() {
    return await this.procRepo.getFeaturedShops();
  }

  @Post('request-shipping')
  async requestShipping() {
    return await this.procRepo.requestShipping();
  }

  @Post('request-courier-service')
  async requestCourierService() {
    return await this.procRepo.requestCourierService();
  }
}
