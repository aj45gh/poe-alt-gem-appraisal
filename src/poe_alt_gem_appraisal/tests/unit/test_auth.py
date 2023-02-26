from unittest import TestCase
from unittest.mock import patch

from auth import POEAuth
import scope


class TestAuth(TestCase):
    @patch("auth.POEAuth.request_token")
    def test_get_token_new(self, mock_request):
        mock_request.return_value = "mock_token"

        auth = POEAuth("mock_client_id", "mock_client_secret")
        self.assertEqual(
            auth.get_token(scope=scope.SERVICE_PSAPI), scope.SERVICE_PSAPI.token
        )

    @patch("auth.POEAuth.request_token")
    def test_get_token_existing(self, mock_request):
        """A new token should not be requested if the scope already has one."""

        mock_request.return_value = "new_mock_token"

        auth = POEAuth("mock_client_id", "mock_client_secret")
        scope.SERVICE_PSAPI.token = "existing_mock_token"

        self.assertNotEqual(
            auth.get_token(scope.SERVICE_PSAPI), mock_request.return_value
        )
