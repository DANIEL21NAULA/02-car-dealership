import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brand.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}
  populateDB() {
    // CARS_SEED
    // BRANDS_SEED
    //* para ejecutar este servicio se debe ubicar lo siguiente:
    //* 1. exports: [CarsService] en el cars.module para que los servicios de cars pueda se ejecutado desde cualquier modulo
    //* 2. imports: [CarsModule], en el modulo a utilizar en este caso en el seed.moule
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillBrandsWithSeedData(BRANDS_SEED);
    return `seed executed`;
  }
}
