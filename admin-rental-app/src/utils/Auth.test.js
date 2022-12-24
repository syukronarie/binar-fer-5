import Auth from "./Auth";

describe("Auth test", () => {
	// it('should return true when token exist', () => {

	// });
	it("should return null when token not exist", () => {
		const auth = Auth.isAuthorization();
		expect(auth).toBe(null);
	});
});
