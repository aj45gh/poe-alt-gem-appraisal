from typing import Type

import requests

from exception import ScopeNotGrantedError


class POEAuth:
    """All things related to authenticating with the PoE Developer API"""

    def __init__(self, client_id: str, client_secret: str):
        """POEAuth class constructor.

        Keyword arguments:
        client_id -- used for auth, application specific
        client_secret -- used for auth, can be re-generated if leaked or lost
        """
        self.client_id = client_id
        self.client_secret = client_secret

        # Available auth scopes
        self.account_profile = POEAuthScope(id="account:profile")
        self.account_stashes = POEAuthScope(id="account:stashes")
        self.account_characters = POEAuthScope(id="account:characters")
        self.account_league_accounts = POEAuthScope(id="account:league_accounts")
        self.account_item_filter = POEAuthScope(id="account:item_filter")
        self.service_leagues = POEAuthScope(id="service:leagues")
        self.service_leagues_ladder = POEAuthScope(id="service:leagues:ladder")
        self.service_pvp_matches = POEAuthScope(id="service:pvp_matches")
        self.service_pvp_matches_ladder = POEAuthScope(id="service:pvp_matches:ladder")
        self.service_psapi = POEAuthScope(id="service:psapi", granted=True)

    def get_token(self, scope: Type["POEAuthScope"]) -> str:
        """Return an existing token for the given scope, or request a new one.

        Keyword arguments:
        scope -- scope to get token for
        """

        if not scope.granted:
            raise ScopeNotGrantedError

        if not scope.token:
            scope.token = self.request_token(scope.id)

        return scope.token

    def request_token(self, scope: str):
        """Request a new token for the given scope.

        Keyword arguments:
        scope -- scope to request new token for (ex: "service:psapi")
        """

        url = "https://www.pathofexile.com/oauth/token"
        headers = {
            f"User-Agent": "OAuth {self.client_id}/0.0.1 (contact: alexjames12345@hotmail.com) StrictMode",
        }
        data = {
            "client_id": self.client_id,
            "client_secret": self.client_secret,
            "grant_type": "client_credentials",
            "scope": scope,
        }

        try:
            r = requests.post(url=url, headers=headers, data=data)

            if r.status_code != requests.codes.ok:
                raise Exception(f"Received status code {r.status_code}")

            return r.json()["access_token"]

        except Exception as e:
            raise e


class POEAuthScope:
    """Hold data related to auth scopes."""

    def __init__(self, id: str, granted: bool = False):
        """POEAuthScope class constructor.

        Keyword arguments:
        id -- used when referring to scope (ex: "service:psapi")
        granted -- whether application has access to scope, defaults to False
        """

        self.id = id
        self.granted = granted

        self._token = ""

    @property
    def token(self):
        return self._token

    @token.setter
    def token(self, token: str):
        self._token = token
