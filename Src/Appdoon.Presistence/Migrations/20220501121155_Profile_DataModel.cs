using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Appdoon.Presistence.Migrations
{
    public partial class Profile_DataModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CreatoreId",
                table: "RoadMaps",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "RoadMapUser",
                columns: table => new
                {
                    SignedRoadMapsId = table.Column<int>(type: "int", nullable: false),
                    StudentsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RoadMapUser", x => new { x.SignedRoadMapsId, x.StudentsId });
                    table.ForeignKey(
                        name: "FK_RoadMapUser_RoadMaps_SignedRoadMapsId",
                        column: x => x.SignedRoadMapsId,
                        principalTable: "RoadMaps",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RoadMapUser_Users_StudentsId",
                        column: x => x.StudentsId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RoadMapUser1",
                columns: table => new
                {
                    BookmarkedRoadMapsId = table.Column<int>(type: "int", nullable: false),
                    UsersBookmarkedId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RoadMapUser1", x => new { x.BookmarkedRoadMapsId, x.UsersBookmarkedId });
                    table.ForeignKey(
                        name: "FK_RoadMapUser1_RoadMaps_BookmarkedRoadMapsId",
                        column: x => x.BookmarkedRoadMapsId,
                        principalTable: "RoadMaps",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RoadMapUser1_Users_UsersBookmarkedId",
                        column: x => x.UsersBookmarkedId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 1,
                column: "InsertTime",
                value: new DateTime(2022, 5, 1, 16, 41, 55, 281, DateTimeKind.Local).AddTicks(1783));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 2,
                column: "InsertTime",
                value: new DateTime(2022, 5, 1, 16, 41, 55, 287, DateTimeKind.Local).AddTicks(2176));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 3,
                column: "InsertTime",
                value: new DateTime(2022, 5, 1, 16, 41, 55, 287, DateTimeKind.Local).AddTicks(2556));

            migrationBuilder.CreateIndex(
                name: "IX_RoadMaps_CreatoreId",
                table: "RoadMaps",
                column: "CreatoreId");

            migrationBuilder.CreateIndex(
                name: "IX_RoadMapUser_StudentsId",
                table: "RoadMapUser",
                column: "StudentsId");

            migrationBuilder.CreateIndex(
                name: "IX_RoadMapUser1_UsersBookmarkedId",
                table: "RoadMapUser1",
                column: "UsersBookmarkedId");

            migrationBuilder.AddForeignKey(
                name: "FK_RoadMaps_Users_CreatoreId",
                table: "RoadMaps",
                column: "CreatoreId",
                principalTable: "Users",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RoadMaps_Users_CreatoreId",
                table: "RoadMaps");

            migrationBuilder.DropTable(
                name: "RoadMapUser");

            migrationBuilder.DropTable(
                name: "RoadMapUser1");

            migrationBuilder.DropIndex(
                name: "IX_RoadMaps_CreatoreId",
                table: "RoadMaps");

            migrationBuilder.DropColumn(
                name: "CreatoreId",
                table: "RoadMaps");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 1,
                column: "InsertTime",
                value: new DateTime(2022, 5, 1, 16, 22, 25, 464, DateTimeKind.Local).AddTicks(528));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 2,
                column: "InsertTime",
                value: new DateTime(2022, 5, 1, 16, 22, 25, 468, DateTimeKind.Local).AddTicks(935));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 3,
                column: "InsertTime",
                value: new DateTime(2022, 5, 1, 16, 22, 25, 468, DateTimeKind.Local).AddTicks(1173));
        }
    }
}
