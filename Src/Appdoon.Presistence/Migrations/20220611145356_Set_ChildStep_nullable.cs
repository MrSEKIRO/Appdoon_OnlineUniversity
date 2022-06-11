using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Appdoon.Presistence.Migrations
{
    public partial class Set_ChildStep_nullable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChildSteps_Steps_StepId",
                table: "ChildSteps");

            migrationBuilder.AlterColumn<int>(
                name: "StepId",
                table: "ChildSteps",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 1,
                column: "InsertTime",
                value: new DateTime(2022, 6, 11, 19, 23, 55, 297, DateTimeKind.Local).AddTicks(9813));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 2,
                column: "InsertTime",
                value: new DateTime(2022, 6, 11, 19, 23, 55, 304, DateTimeKind.Local).AddTicks(2554));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 3,
                column: "InsertTime",
                value: new DateTime(2022, 6, 11, 19, 23, 55, 304, DateTimeKind.Local).AddTicks(2955));

            migrationBuilder.AddForeignKey(
                name: "FK_ChildSteps_Steps_StepId",
                table: "ChildSteps",
                column: "StepId",
                principalTable: "Steps",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChildSteps_Steps_StepId",
                table: "ChildSteps");

            migrationBuilder.AlterColumn<int>(
                name: "StepId",
                table: "ChildSteps",
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
                name: "FK_ChildSteps_Steps_StepId",
                table: "ChildSteps",
                column: "StepId",
                principalTable: "Steps",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
