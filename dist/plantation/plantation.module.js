"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantationModule = void 0;
const common_1 = require("@nestjs/common");
const plantation_service_1 = require("./plantation.service");
const plantation_controller_1 = require("./plantation.controller");
const mongoose_1 = require("@nestjs/mongoose");
const nigger_schema_1 = require("../schema/nigger.schema");
const nigger_module_1 = require("../nigger/nigger.module");
let PlantationModule = class PlantationModule {
};
exports.PlantationModule = PlantationModule;
exports.PlantationModule = PlantationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: nigger_schema_1.Nigger.name, schema: nigger_schema_1.NiggerSchema }]),
            nigger_module_1.NiggerModule
        ],
        controllers: [plantation_controller_1.PlantationController],
        providers: [plantation_service_1.PlantationService],
    })
], PlantationModule);
//# sourceMappingURL=plantation.module.js.map