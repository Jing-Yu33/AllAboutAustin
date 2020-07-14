package info.allaboutaustin.RestfulApi.controllers;

public class CommentInfo {
	private String content;
	private String userName;
	
	public CommentInfo(String content, String userName) {
		this.content = content;
		this.userName = userName;
	}
	
	public String getContent() {
		return content;
	}
	public String getUserName() {
		return userName;
	}
}
