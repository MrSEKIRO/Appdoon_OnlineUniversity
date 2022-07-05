using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Appdoon.Presistence.Migrations
{
    public partial class set_Creator_NotNull_for_Roadmap : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "CreatoreId",
                table: "RoadMaps",
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
                value: new DateTime(2022, 6, 30, 17, 33, 27, 339, DateTimeKind.Local).AddTicks(4498));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 2,
                column: "InsertTime",
                value: new DateTime(2022, 6, 30, 17, 33, 27, 346, DateTimeKind.Local).AddTicks(8684));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 3,
                column: "InsertTime",
                value: new DateTime(2022, 6, 30, 17, 33, 27, 346, DateTimeKind.Local).AddTicks(8940));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "CreatoreId",
                table: "RoadMaps",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 1,
                column: "InsertTime",
                value: new DateTime(2022, 6, 30, 15, 59, 9, 672, DateTimeKind.Local).AddTicks(5098));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 2,
                column: "InsertTime",
                value: new DateTime(2022, 6, 30, 15, 59, 9, 676, DateTimeKind.Local).AddTicks(5692));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 3,
                column: "InsertTime",
                value: new DateTime(2022, 6, 30, 15, 59, 9, 676, DateTimeKind.Local).AddTicks(5936));
        }
    }
}
