package info.allaboutaustin.RestfulApi.controllers;

public class UserInfo {
	private String googleId;
	private String userName;
	
	public UserInfo(String googleId, String userName) {
		this.googleId = googleId;
		this.userName = userName;
	}
	
	public String getGoogleId() {
		return googleId;
	}
	public String getUserName() {
		return userName;
	}
}
