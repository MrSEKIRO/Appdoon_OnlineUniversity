using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Appdoon.Presistence.Migrations
{
    public partial class set_StepId_for_Childstep_NotNull : Migration
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
                value: new DateTime(2022, 6, 19, 15, 43, 16, 710, DateTimeKind.Local).AddTicks(4007));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 2,
                column: "InsertTime",
                value: new DateTime(2022, 6, 19, 15, 43, 16, 721, DateTimeKind.Local).AddTicks(346));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 3,
                column: "InsertTime",
                value: new DateTime(2022, 6, 19, 15, 43, 16, 721, DateTimeKind.Local).AddTicks(810));

            migrationBuilder.AddForeignKey(
                name: "FK_ChildSteps_Steps_StepId",
                table: "ChildSteps",
                column: "StepId",
                principalTable: "Steps",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
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
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

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
                name: "FK_ChildSteps_Steps_StepId",
                table: "ChildSteps",
                column: "StepId",
                principalTable: "Steps",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
