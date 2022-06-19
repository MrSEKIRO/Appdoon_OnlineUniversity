using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Appdoon.Presistence.Migrations
{
    public partial class set_RoadmapId_for_Step_NotNull : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Steps_RoadMaps_RoadMapId",
                table: "Steps");

            migrationBuilder.AlterColumn<int>(
                name: "RoadMapId",
                table: "Steps",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 1,
                column: "InsertTime",
                value: new DateTime(2022, 6, 19, 15, 40, 30, 856, DateTimeKind.Local).AddTicks(9210));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 2,
                column: "InsertTime",
                value: new DateTime(2022, 6, 19, 15, 40, 30, 864, DateTimeKind.Local).AddTicks(7286));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 3,
                column: "InsertTime",
                value: new DateTime(2022, 6, 19, 15, 40, 30, 864, DateTimeKind.Local).AddTicks(7689));

            migrationBuilder.AddForeignKey(
                name: "FK_Steps_RoadMaps_RoadMapId",
                table: "Steps",
                column: "RoadMapId",
                principalTable: "RoadMaps",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Steps_RoadMaps_RoadMapId",
                table: "Steps");

            migrationBuilder.AlterColumn<int>(
                name: "RoadMapId",
                table: "Steps",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 1,
                column: "InsertTime",
                value: new DateTime(2022, 6, 17, 11, 41, 48, 540, DateTimeKind.Local).AddTicks(9122));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 2,
                column: "InsertTime",
                value: new DateTime(2022, 6, 17, 11, 41, 48, 547, DateTimeKind.Local).AddTicks(3227));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 3,
                column: "InsertTime",
                value: new DateTime(2022, 6, 17, 11, 41, 48, 547, DateTimeKind.Local).AddTicks(4017));

            migrationBuilder.AddForeignKey(
                name: "FK_Steps_RoadMaps_RoadMapId",
                table: "Steps",
                column: "RoadMapId",
                principalTable: "RoadMaps",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
