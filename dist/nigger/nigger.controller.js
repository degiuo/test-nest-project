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
exports.NiggerController = void 0;
const common_1 = require("@nestjs/common");
const nigger_service_1 = require("./nigger.service");
const create_nigger_dto_1 = require("./dto/create-nigger.dto");
let NiggerController = class NiggerController {
    niggerService;
    constructor(niggerService) {
        this.niggerService = niggerService;
    }
    async create(dto) {
        return this.niggerService.make_slave(dto);
    }
    async pay() {
        return this.niggerService.add_payment(10000 * 0.001);
    }
};
exports.NiggerController = NiggerController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_nigger_dto_1.createNiggerDto]),
    __metadata("design:returntype", Promise)
], NiggerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('pay'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NiggerController.prototype, "pay", null);
exports.NiggerController = NiggerController = __decorate([
    (0, common_1.Controller)('nigger'),
    __metadata("design:paramtypes", [nigger_service_1.NiggerService])
], NiggerController);
//# sourceMappingURL=nigger.controller.js.map