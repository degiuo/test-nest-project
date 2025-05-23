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
exports.NiggerService = void 0;
const common_1 = require("@nestjs/common");
const monkey_class_1 = require("../class/monkey.class");
const mongoose_1 = require("@nestjs/mongoose");
const nigger_schema_1 = require("../schema/nigger.schema");
const mongoose = require("mongoose");
let NiggerService = class NiggerService extends monkey_class_1.Monkey {
    niggerModel;
    constructor(niggerModel) {
        super();
        this.niggerModel = niggerModel;
    }
    async add_payment(money) {
        const nigger = await this.niggerModel.find();
        const average = money / nigger.length;
        const _money = average * 0.001;
        const plantationMoney = average - _money;
        nigger.forEach(async (val) => {
            let total_balance = val.total_balance + _money;
            await this.niggerModel.findByIdAndUpdate(val.id, { 'total_balance': total_balance });
        });
        return plantationMoney;
    }
    async make_slave(dto) {
        const nigger = await this.niggerModel.create(dto);
        return nigger;
    }
};
exports.NiggerService = NiggerService;
exports.NiggerService = NiggerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(nigger_schema_1.Nigger.name)),
    __metadata("design:paramtypes", [mongoose.Model])
], NiggerService);
//# sourceMappingURL=nigger.service.js.map