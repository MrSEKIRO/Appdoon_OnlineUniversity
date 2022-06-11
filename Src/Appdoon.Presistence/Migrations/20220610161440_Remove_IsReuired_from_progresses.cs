using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Appdoon.Presistence.Migrations
{
    public partial class Remove_IsReuired_from_progresses : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsRequired",
                table: "StepProgresses");

            migrationBuilder.DropColumn(
                name: "IsRequired",
                table: "ChildStepProgresses");

            migrationBuilder.AddColumn<bool>(
                name: "IsRequired",
                table: "Steps",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsRequired",
                table: "ChildSteps",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 1,
                column: "InsertTime",
                value: new DateTime(2022, 6, 10, 20, 44, 39, 67, DateTimeKind.Local).AddTicks(3452));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 2,
                column: "InsertTime",
                value: new DateTime(2022, 6, 10, 20, 44, 39, 74, DateTimeKind.Local).AddTicks(4309));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 3,
                column: "InsertTime",
                value: new DateTime(2022, 6, 10, 20, 44, 39, 74, DateTimeKind.Local).AddTicks(4753));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsRequired",
                table: "Steps");

            migrationBuilder.DropColumn(
                name: "IsRequired",
                table: "ChildSteps");

            migrationBuilder.AddColumn<bool>(
                name: "IsRequired",
                table: "StepProgresses",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsRequired",
                table: "ChildStepProgresses",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 1,
                column: "InsertTime",
                value: new DateTime(2022, 6, 3, 22, 46, 45, 494, DateTimeKind.Local).AddTicks(3477));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 2,
                column: "InsertTime",
                value: new DateTime(2022, 6, 3, 22, 46, 45, 498, DateTimeKind.Local).AddTicks(4053));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 3,
                column: "InsertTime",
                value: new DateTime(2022, 6, 3, 22, 46, 45, 498, DateTimeKind.Local).AddTicks(4437));
        }
    }
}
