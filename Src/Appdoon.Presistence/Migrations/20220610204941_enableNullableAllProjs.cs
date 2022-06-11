using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Appdoon.Presistence.Migrations
{
    public partial class enableNullableAllProjs : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChildStepProgresses_ChildSteps_ChildStepId",
                table: "ChildStepProgresses");

            migrationBuilder.DropForeignKey(
                name: "FK_ChildStepProgresses_Users_UserId",
                table: "ChildStepProgresses");

            migrationBuilder.DropForeignKey(
                name: "FK_StepProgresses_Steps_StepId",
                table: "StepProgresses");

            migrationBuilder.DropForeignKey(
                name: "FK_StepProgresses_Users_UserId",
                table: "StepProgresses");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "StepProgresses",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "StepId",
                table: "StepProgresses",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "ChildStepProgresses",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ChildStepId",
                table: "ChildStepProgresses",
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
                value: new DateTime(2022, 6, 11, 1, 19, 40, 130, DateTimeKind.Local).AddTicks(541));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 2,
                column: "InsertTime",
                value: new DateTime(2022, 6, 11, 1, 19, 40, 136, DateTimeKind.Local).AddTicks(8857));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 3,
                column: "InsertTime",
                value: new DateTime(2022, 6, 11, 1, 19, 40, 136, DateTimeKind.Local).AddTicks(9767));

            migrationBuilder.AddForeignKey(
                name: "FK_ChildStepProgresses_ChildSteps_ChildStepId",
                table: "ChildStepProgresses",
                column: "ChildStepId",
                principalTable: "ChildSteps",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ChildStepProgresses_Users_UserId",
                table: "ChildStepProgresses",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_StepProgresses_Steps_StepId",
                table: "StepProgresses",
                column: "StepId",
                principalTable: "Steps",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_StepProgresses_Users_UserId",
                table: "StepProgresses",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChildStepProgresses_ChildSteps_ChildStepId",
                table: "ChildStepProgresses");

            migrationBuilder.DropForeignKey(
                name: "FK_ChildStepProgresses_Users_UserId",
                table: "ChildStepProgresses");

            migrationBuilder.DropForeignKey(
                name: "FK_StepProgresses_Steps_StepId",
                table: "StepProgresses");

            migrationBuilder.DropForeignKey(
                name: "FK_StepProgresses_Users_UserId",
                table: "StepProgresses");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "StepProgresses",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "StepId",
                table: "StepProgresses",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "ChildStepProgresses",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "ChildStepId",
                table: "ChildStepProgresses",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 1,
                column: "InsertTime",
                value: new DateTime(2022, 6, 10, 23, 34, 21, 395, DateTimeKind.Local).AddTicks(3384));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 2,
                column: "InsertTime",
                value: new DateTime(2022, 6, 10, 23, 34, 21, 400, DateTimeKind.Local).AddTicks(640));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 3,
                column: "InsertTime",
                value: new DateTime(2022, 6, 10, 23, 34, 21, 400, DateTimeKind.Local).AddTicks(1029));

            migrationBuilder.AddForeignKey(
                name: "FK_ChildStepProgresses_ChildSteps_ChildStepId",
                table: "ChildStepProgresses",
                column: "ChildStepId",
                principalTable: "ChildSteps",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ChildStepProgresses_Users_UserId",
                table: "ChildStepProgresses",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_StepProgresses_Steps_StepId",
                table: "StepProgresses",
                column: "StepId",
                principalTable: "Steps",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_StepProgresses_Users_UserId",
                table: "StepProgresses",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
