// Generated by CoffeeScript 1.9.3
(function() {
  module.exports = {
    id: {
      type: "int",
      autoIncrement: true,
      primaryKey: true
    },
    name: "varchar(30)",
    desc_md: "varchar(500)",
    desc: "text",
    pic: "varchar(255)",
    keywords: "varchar(200)",
    parent_id: "int",
    qa_count: {
      defaultValue: 0,
      type: "int"
    },
    comment_count: {
      type: "int",
      defaultValue: 0
    }
  };

}).call(this);
