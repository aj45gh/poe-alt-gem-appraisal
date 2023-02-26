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


ACCOUNT_PROFILE = POEAuthScope(id="account:profile")
ACCOUNT_STASHES = POEAuthScope(id="account:stashes")
ACCOUNT_CHARACTERS = POEAuthScope(id="account:characters")
ACCOUNT_LEAGUE_ACCOUNTS = POEAuthScope(id="account:league_accounts")
ACCOUNT_ITEM_FILTER = POEAuthScope(id="account:item_filter")
SERVICE_LEAGUES = POEAuthScope(id="service:leagues")
SERVICE_LEAGUES_LADDER = POEAuthScope(id="service:leagues:ladder")
SERVICE_PVP_MATCHES = POEAuthScope(id="service:pvp_matches")
SERVICE_PVP_MATCHES_LADDER = POEAuthScope(id="service:pvp_matches:ladder")
SERVICE_PSAPI = POEAuthScope(id="service:psapi", granted=True)
