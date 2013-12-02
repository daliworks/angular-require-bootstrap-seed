define(['jquery'], function($) {

  describe('just checking', function() {

    it('works for app', function() {
      var el = $('<div>require.js up and running</div>');

      expect(el.text()).toEqual('require.js up and running');
    });

    it('works for array size', function() {
      // just checking that _ works
      expect([1,2,3].length).toEqual(3);
    });
  });
});