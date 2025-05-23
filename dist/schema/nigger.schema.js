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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NiggerSchema = exports.Nigger = exports.Color = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var Color;
(function (Color) {
    Color["BLACK"] = "black";
    Color["DARK"] = "dark";
    Color["INVISIBLE"] = "invisible";
})(Color || (exports.Color = Color = {}));
let Nigger = class Nigger {
    name;
    total_balance;
    color;
};
exports.Nigger = Nigger;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Nigger.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Nigger.prototype, "total_balance", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Nigger.prototype, "color", void 0);
exports.Nigger = Nigger = __decorate([
    (0, mongoose_1.Schema)()
], Nigger);
exports.NiggerSchema = mongoose_1.SchemaFactory.createForClass(Nigger);
//# sourceMappingURL=nigger.schema.js.map