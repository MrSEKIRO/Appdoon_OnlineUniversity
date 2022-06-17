using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Appdoon.Presistence.Migrations
{
    public partial class Set_Roadmap_forStep_nullable : Migration
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
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 1,
                column: "InsertTime",
                value: new DateTime(2022, 6, 11, 17, 21, 26, 153, DateTimeKind.Local).AddTicks(4048));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 2,
                column: "InsertTime",
                value: new DateTime(2022, 6, 11, 17, 21, 26, 162, DateTimeKind.Local).AddTicks(1821));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 3,
                column: "InsertTime",
                value: new DateTime(2022, 6, 11, 17, 21, 26, 162, DateTimeKind.Local).AddTicks(2204));

            migrationBuilder.AddForeignKey(
                name: "FK_Steps_RoadMaps_RoadMapId",
                table: "Steps",
                column: "RoadMapId",
                principalTable: "RoadMaps",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
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
                value: new DateTime(2022, 6, 11, 17, 7, 26, 781, DateTimeKind.Local).AddTicks(1216));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 2,
                column: "InsertTime",
                value: new DateTime(2022, 6, 11, 17, 7, 26, 785, DateTimeKind.Local).AddTicks(2419));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 3,
                column: "InsertTime",
                value: new DateTime(2022, 6, 11, 17, 7, 26, 785, DateTimeKind.Local).AddTicks(2634));

            migrationBuilder.AddForeignKey(
                name: "FK_Steps_RoadMaps_RoadMapId",
                table: "Steps",
                column: "RoadMapId",
                principalTable: "RoadMaps",
                principalColumn: "Id");
        }
    }
}
