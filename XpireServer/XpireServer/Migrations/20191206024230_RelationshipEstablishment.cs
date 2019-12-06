using Microsoft.EntityFrameworkCore.Migrations;

namespace XpireServer.Migrations
{
    public partial class RelationshipEstablishment : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "UserId1",
                table: "GroceryItem",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_GroceryItem_UserId1",
                table: "GroceryItem",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_GroceryItem_User_UserId1",
                table: "GroceryItem",
                column: "UserId1",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GroceryItem_User_UserId1",
                table: "GroceryItem");

            migrationBuilder.DropIndex(
                name: "IX_GroceryItem_UserId1",
                table: "GroceryItem");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "GroceryItem");
        }
    }
}
