"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantationController = void 0;
const common_1 = require("@nestjs/common");
const plantation_service_1 = require("./plantation.service");
const create_nigger_dto_1 = require("../nigger/dto/create-nigger.dto");
let PlantationController = class PlantationController {
    plantationService;
    niggerService;
    constructor(plantationService) {
        this.plantationService = plantationService;
    }
    async create(dto) {
        return this.plantationService.add_nigger(dto);
    }
    async payday() {
        return this.plantationService.payday();
    }
    async getNiggers() {
        return this.plantationService.getNiggers();
    }
};
exports.PlantationController = PlantationController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_nigger_dto_1.createNiggerDto]),
    __metadata("design:returntype", Promise)
], PlantationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PlantationController.prototype, "payday", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PlantationController.prototype, "getNiggers", null);
exports.PlantationController = PlantationController = __decorate([
    (0, common_1.Controller)('plantation'),
    __metadata("design:paramtypes", [plantation_service_1.PlantationService])
], PlantationController);
//# sourceMappingURL=plantation.controller.js.map