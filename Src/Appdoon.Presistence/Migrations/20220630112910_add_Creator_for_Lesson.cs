using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Appdoon.Presistence.Migrations
{
    public partial class add_Creator_for_Lesson : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CreatorId",
                table: "Lessons",
                type: "int",
                nullable: false,
                defaultValue: 0);

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

            migrationBuilder.CreateIndex(
                name: "IX_Lessons_CreatorId",
                table: "Lessons",
                column: "CreatorId");

            migrationBuilder.AddForeignKey(
                name: "FK_Lessons_Users_CreatorId",
                table: "Lessons",
                column: "CreatorId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Lessons_Users_CreatorId",
                table: "Lessons");

            migrationBuilder.DropIndex(
                name: "IX_Lessons_CreatorId",
                table: "Lessons");

            migrationBuilder.DropColumn(
                name: "CreatorId",
                table: "Lessons");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 1,
                column: "InsertTime",
                value: new DateTime(2022, 6, 19, 15, 45, 22, 249, DateTimeKind.Local).AddTicks(4104));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 2,
                column: "InsertTime",
                value: new DateTime(2022, 6, 19, 15, 45, 22, 259, DateTimeKind.Local).AddTicks(7989));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 3,
                column: "InsertTime",
                value: new DateTime(2022, 6, 19, 15, 45, 22, 259, DateTimeKind.Local).AddTicks(8394));
        }
    }
}
